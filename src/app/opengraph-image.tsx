import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "SisyphusSQ · DBA 与数据库工程";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const avatarData = await readFile(
    join(process.cwd(), "public/avatar.jpg"),
    "base64",
  );
  const avatarSrc = `data:image/jpeg;base64,${avatarData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f7f2",
          color: "#121820",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          <img
            alt=""
            height={64}
            src={avatarSrc}
            style={{ borderRadius: "50%" }}
            width={64}
          />
          SisyphusSQ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ color: "#275df5", fontSize: 22, letterSpacing: 3 }}>
            DBA / DATABASE ENGINEERING / DEVELOPMENT
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "serif",
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
            }}
          >
            <span>DBA，</span>
            <span>也做开发。</span>
          </div>
        </div>
        <div
          style={{
            borderTop: "2px solid #d9dde1",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 24,
            fontSize: 22,
          }}
        >
          <span>2018 至今 · Go / Java / Python</span>
          <span>sisyphuslab.cn</span>
        </div>
      </div>
    ),
    size,
  );
}
