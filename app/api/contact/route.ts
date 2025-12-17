import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 调试：检查环境变量
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "所有字段都是必填项。" },
        { status: 400 }
      );
    }

    // 检查环境变量是否存在
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("环境变量未设置！");
      return NextResponse.json({ message: "服务器配置错误" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 测试连接
    await transporter.verify();
    console.log("SMTP 连接成功！");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `来自联系表单的新消息: ${subject}`,
      html: `
        <h2>新的联系表单消息</h2>
        <p><b>姓名:</b> ${name}</p>
        <p><b>邮箱:</b> ${email}</p>
        <p><b>主题:</b> ${subject}</p>
        <p><b>消息:</b></p>
        <p>${message}</p>
      `,
      replyTo: email, // 添加回复地址
    };

    await transporter.sendMail(mailOptions);
    console.log("邮件发送成功！");

    return NextResponse.json({ message: "邮件发送成功！" }, { status: 200 });
  } catch (error) {
    console.error("发送邮件失败:", error);
    return NextResponse.json(
      {
        message: "邮件发送失败，请稍后再试。",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
