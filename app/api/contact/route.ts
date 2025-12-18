import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json({ message: "服务器配置错误" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "所有字段都是必填项。" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: email,
      subject: `来自联系表单的新消息: ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
          <h2>📬 新的联系表单消息</h2>
          <p><b>姓名：</b>${name}</p>
          <p><b>邮箱：</b>${email}</p>
          <p><b>主题：</b>${subject}</p>
          <hr />
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "邮件发送成功！" });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { message: "邮件发送失败，请稍后再试。" },
      { status: 500 }
    );
  }
}
// app/api/env-test/route.ts
export async function GET() {
  return new Response(
    JSON.stringify({
      RESEND_API_KEY: !!process.env.RESEND_API_KEY,
      CONTACT_RECEIVER_EMAIL: !!process.env.CONTACT_RECEIVER_EMAIL,
    }),
    { status: 200 }
  );
}
