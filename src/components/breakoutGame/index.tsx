import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const BASE_W = 480;
const BASE_H = 300;
const PADDLE_W = 86;
const PADDLE_H = 10;
const BALL_R = 6;
const ROWS = 4;
const COLS = 8;
const BRICK_GAP = 5;
const BRICK_H = 12;
const BRICK_TOP = 28;

type Brick = { x: number; y: number; w: number; h: number; alive: boolean };

const createBricks = (): Brick[] => {
  const brickW = (BASE_W - BRICK_GAP * (COLS + 1)) / COLS;
  const bricks: Brick[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      bricks.push({
        x: BRICK_GAP + c * (brickW + BRICK_GAP),
        y: BRICK_TOP + r * (BRICK_H + BRICK_GAP),
        w: brickW,
        h: BRICK_H,
        alive: true,
      });
    }
  }
  return bricks;
};

const BreakoutGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);
  const keysRef = useRef({ left: false, right: false });
  const pointerXRef = useRef<number | null>(null);
  const scaleRef = useRef(1);
  const stateRef = useRef({
    paddleX: (BASE_W - PADDLE_W) / 2,
    ballX: BASE_W / 2,
    ballY: BASE_H - 40,
    vx: 2.6,
    vy: -2.8,
    bricks: createBricks(),
    score: 0,
    running: false,
    won: false,
    lost: false,
  });
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<"idle" | "playing" | "won" | "lost">(
    "idle"
  );

  const reset = useCallback((autoStart = false) => {
    stateRef.current = {
      paddleX: (BASE_W - PADDLE_W) / 2,
      ballX: BASE_W / 2,
      ballY: BASE_H - 40,
      vx: 2.6 * (Math.random() > 0.5 ? 1 : -1),
      vy: -2.8,
      bricks: createBricks(),
      score: 0,
      running: autoStart,
      won: false,
      lost: false,
    };
    setScore(0);
    setStatus(autoStart ? "playing" : "idle");
  }, []);

  const syncCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const cssW = wrap.clientWidth;
    const cssH = (cssW * BASE_H) / BASE_W;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    scaleRef.current = cssW / BASE_W;
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    const s = stateRef.current;
    const scale = scaleRef.current;
    const w = BASE_W * scale;
    const h = BASE_H * scale;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, w, h);

    for (const brick of s.bricks) {
      if (!brick.alive) continue;
      ctx.fillStyle = "#0F6E6A";
      ctx.fillRect(brick.x * scale, brick.y * scale, brick.w * scale, brick.h * scale);
      ctx.fillStyle = "rgba(250, 248, 244, 0.14)";
      ctx.fillRect(brick.x * scale, brick.y * scale, brick.w * scale, 2 * scale);
    }

    ctx.fillStyle = "#FAF8F4";
    ctx.fillRect(
      s.paddleX * scale,
      (BASE_H - 22) * scale,
      PADDLE_W * scale,
      PADDLE_H * scale
    );

    ctx.beginPath();
    ctx.arc(s.ballX * scale, s.ballY * scale, BALL_R * scale, 0, Math.PI * 2);
    ctx.fillStyle = "#A0E7E5";
    ctx.fill();
  }, []);

  const step = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const s = stateRef.current;

    if (s.running) {
      if (keysRef.current.left) s.paddleX -= 5.5;
      if (keysRef.current.right) s.paddleX += 5.5;
      if (pointerXRef.current !== null) {
        s.paddleX = pointerXRef.current - PADDLE_W / 2;
      }
      s.paddleX = Math.max(0, Math.min(BASE_W - PADDLE_W, s.paddleX));

      s.ballX += s.vx;
      s.ballY += s.vy;

      if (s.ballX <= BALL_R || s.ballX >= BASE_W - BALL_R) s.vx *= -1;
      if (s.ballY <= BALL_R) s.vy *= -1;

      const paddleTop = BASE_H - 22;
      if (
        s.vy > 0 &&
        s.ballY + BALL_R >= paddleTop &&
        s.ballY + BALL_R <= paddleTop + PADDLE_H + 4 &&
        s.ballX >= s.paddleX &&
        s.ballX <= s.paddleX + PADDLE_W
      ) {
        s.vy = -Math.abs(s.vy);
        const hit = (s.ballX - (s.paddleX + PADDLE_W / 2)) / (PADDLE_W / 2);
        s.vx = hit * 3.4;
      }

      for (const brick of s.bricks) {
        if (!brick.alive) continue;
        if (
          s.ballX > brick.x &&
          s.ballX < brick.x + brick.w &&
          s.ballY > brick.y &&
          s.ballY < brick.y + brick.h
        ) {
          brick.alive = false;
          s.vy *= -1;
          s.score += 10;
          setScore(s.score);
          break;
        }
      }

      if (s.bricks.every((b) => !b.alive)) {
        s.running = false;
        s.won = true;
        setStatus("won");
      }

      if (s.ballY > BASE_H + BALL_R) {
        s.running = false;
        s.lost = true;
        setStatus("lost");
      }
    }

    draw(ctx);
    rafRef.current = requestAnimationFrame(step);
  }, [draw]);

  useEffect(() => {
    syncCanvasSize();
    const onResize = () => syncCanvasSize();
    window.addEventListener("resize", onResize);

    let observer: ResizeObserver | undefined;
    if (wrapRef.current && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => syncCanvasSize());
      observer.observe(wrapRef.current);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [step, syncCanvasSize]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") keysRef.current.left = true;
      if (e.code === "ArrowRight" || e.code === "KeyD") keysRef.current.right = true;
      if (e.code === "Space") {
        e.preventDefault();
        if (!stateRef.current.running) reset(true);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") keysRef.current.left = false;
      if (e.code === "ArrowRight" || e.code === "KeyD") keysRef.current.right = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [reset]);

  const setPointer = (clientX: number, rect: DOMRect) => {
    pointerXRef.current = ((clientX - rect.left) / rect.width) * BASE_W;
  };

  const statusMessage =
    status === "won"
      ? "You cleared the board"
      : status === "lost"
        ? "Ball dropped — try again"
        : status === "playing"
          ? `Score ${score}`
          : "Mouse / arrows · Space to start";

  return (
    <Box sx={{ width: "100%", maxWidth: 520, minWidth: 0 }}>
      <Typography
        sx={{
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(250, 248, 244, 0.55)",
          mb: 1.5,
        }}
      >
        Take a break · Breakout
      </Typography>

      <Box
        ref={wrapRef}
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: `${BASE_W} / ${BASE_H}`,
          border: "1px solid rgba(250, 248, 244, 0.14)",
          borderRadius: 1,
          overflow: "hidden",
          backgroundColor: "#121212",
          touchAction: "none",
          userSelect: "none",
        }}
      >
        <Box
          component="canvas"
          ref={canvasRef}
          onClick={() => {
            if (!stateRef.current.running) reset(true);
          }}
          onMouseMove={(e) => {
            setPointer(e.clientX, e.currentTarget.getBoundingClientRect());
          }}
          onMouseLeave={() => {
            pointerXRef.current = null;
          }}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            setPointer(touch.clientX, e.currentTarget.getBoundingClientRect());
            if (!stateRef.current.running) reset(true);
          }}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            setPointer(touch.clientX, e.currentTarget.getBoundingClientRect());
          }}
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />

        {status !== "playing" && (
          <Box
            onClick={() => reset(true)}
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.75,
              px: 2,
              backgroundColor: "rgba(18, 18, 18, 0.55)",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FAF8F4",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.3,
              }}
            >
              {status === "idle" ? "Breakout" : statusMessage}
            </Typography>
            <Typography
              sx={{
                color: "rgba(250, 248, 244, 0.7)",
                fontSize: "0.8rem",
              }}
            >
              Click or press Space to play
            </Typography>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          mt: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          minWidth: 0,
        }}
      >
        <Typography
          sx={{
            color: "rgba(250, 248, 244, 0.55)",
            fontSize: "0.85rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            minWidth: 0,
          }}
        >
          {statusMessage}
        </Typography>
        <Button
          size="small"
          onClick={() => reset(true)}
          sx={{
            flexShrink: 0,
            color: "#FAF8F4",
            border: "1px solid rgba(250, 248, 244, 0.25)",
            px: 1.5,
            minWidth: 0,
            "&:hover": {
              borderColor: "#0F6E6A",
              backgroundColor: "rgba(15, 110, 106, 0.25)",
            },
          }}
        >
          {status === "idle" ? "Play" : "Restart"}
        </Button>
      </Box>
    </Box>
  );
};

export default BreakoutGame;
