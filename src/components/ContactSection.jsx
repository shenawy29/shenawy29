import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Html } from "@react-three/drei";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const ContactSection = () => {
  const [Sent, setSent] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID
      )
      .then(
        () => {
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Html
      position={[0, -10, 0]}
      center
      className="flex items-center justify-center space-x-10 h-[40rem]"
    >
      <div className="flex flex-col items-center justify-between h-[50%] space-y-2">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-1 text-white w-[50vw] h-full"
        >
          <div className="flex space-x-1">
            <input
              required
              type="text"
              name="user_name"
              placeholder="Name"
              className="bg-transparent border border-[#727272] rounded-sm placeholder:text-[#727272] h-12 p-3 w-full"
            />
            <input
              required
              type="email"
              name="user_email"
              placeholder="Email"
              className="bg-transparent border border-[#727272] rounded-sm placeholder:text-[#727272] h-12 p-3 w-full"
            />
          </div>
          <textarea
            required
            spellCheck
            name="message"
            placeholder="Message"
            className=" border border-[#727272] rounded-sm placeholder:text-[#727272] p-3 bg-transparent h-full"
          />
          <input
            type="submit"
            className={`h-8 border hover:opacity-50 disabled:opacity-50 disabled:border-gray-500 disabled:text-gray-500 ${
              !Sent ? "active:scale-[101%]" : ""
            } transition-all rounded-sm border-[#F2E100] text-[#F2E100] resize-none`}
            value={Sent ? `Message Sent` : "Send"}
            disabled={Sent}
          />
        </form>
        <div className="flex items-center w-full text-3xl justify-evenly">
          <button href="https://github.com/shenawy29">
            <a
              href="https://github.com/shenawy29"
              target="_blank"
              rel="noreferrer"
              className="text-[#727272] hover:text-[#F2E100] transition-all"
            >
              <BsGithub />
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/mohamed-el-shenawy-21a341254/"
              target="_blank"
              rel="noreferrer"
              className="text-[#727272] hover:text-[#F2E100] transition-colors"
            >
              <AiFillLinkedin />
            </a>
          </button>
        </div>
      </div>
    </Html>
  );
};
export default ContactSection;
