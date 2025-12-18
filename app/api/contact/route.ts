import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "所有字段都是必填项。" },
        { status: 400 }
      );
    }

    if (!process.env.CONTACT_RECEIVER_EMAIL) {
      return NextResponse.json(
        { message: "服务器配置错误。" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL,
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

    return NextResponse.json({ message: "邮件发送成功！" }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { message: "邮件发送失败，请稍后再试。" },
      { status: 500 }
    );
  }
}
