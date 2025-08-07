import React, { forwardRef, useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Slide } from 'react-toastify';

const Contact = forwardRef((props, ref) => {
    const [result, setResult] = React.useState("");
    const [C_border, setC_border] = React.useState(false);
    const [text, setText] = React.useState({
        name: "",
        message: "",
        email: ""
    });

    const listErur = {
        name: useRef(null),
        message: useRef(null),
        email: useRef(null)
    };

    const onSubmit = async (event) => {
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f470e72a-2a9b-4ac2-8bf1-05e10d311bbb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Message sent successfully!");
            setResult("");
            setC_border(true);
            setText({
                name: "",
                message: "",
                email: ""
            });
            event.target.reset();
        } else {
            toast.error("Message failed to send.");
            console.log("Error", data);
            setResult(data.message);
        }
    };

    function check(event) {
        event.preventDefault();

        // إزالة الحدود من الحقول
        Object.values(listErur).forEach((ref) => {
            if (ref.current) ref.current.style.border = "";
        });

        const errors = [];

        if (!text.name.trim()) errors.push("name");
        if (!text.message.trim()) errors.push("message");
        if (!text.email.trim()) errors.push("email");

        if (errors.length > 0) {
            const errorMessage = `Please enter your ${errors.join(" and ")}`;
            errors.forEach((field) => {
                if (listErur[field]?.current) {
                    listErur[field].current.style.border = "2px solid red";
                }
            });
            setC_border(false);
            toast.error(errorMessage);
            return;
        }

        onSubmit(event);
    }

    return (
        <div className="mb-24" ref={ref}>
            <div className="text-center">
                <h1 className='text-center mt-5 text-3xl mb-1.5'>
                    <span className="font-bold">Contact </span>
                    <span className="underline">With Us</span>
                </h1>
                <p className='text-center mb-11 text-[var(--color-secand)] font-[var(--font-main)]'>
                    Ready to Make a Move? Let's Build Your Future Together
                </p>
            </div>

            <div className="flex justify-center">
                <form onSubmit={check} className="flex flex-col sm:w-7/12 w-10/12 gap-6">

                    <input type="hidden" name="access_key" value="f470e72a-2a9b-4ac2-8bf1-05e10d311bbb" />

                    <div className="flex gap-3">
                        <div className="w-6/12">
                            <p>Your Name</p>
                            <input
                                type="text"
                                name="name"
                                value={text.name}
                                ref={listErur.name}
                                style={{ border: C_border ? "1px solid #E0E0E0" : undefined }}
                                className="border border-gray-300 h-9 w-full rounded-sm text-sm p-3"
                                placeholder="Your Name"
                                onChange={(e) => setText((prev) => ({ ...prev, name: e.target.value }))}
                            />
                        </div>
                        <div className="w-6/12">
                            <p>Your Email</p>
                            <input
                                type="email"
                                name="email"
                                value={text.email}
                                ref={listErur.email}
                                style={{ border: C_border ? "1px solid #E0E0E0" : undefined }}
                                className="border border-gray-300 h-9 w-full rounded-sm text-sm p-3"
                                placeholder="Your Email"
                                onChange={(e) => setText((prev) => ({ ...prev, email: e.target.value }))}
                            />
                        </div>
                    </div>

                    <div>
                        <p>Message</p>
                        <textarea
                            name="message"
                            value={text.message}
                            ref={listErur.message}
                            style={{ border: C_border ? "1px solid #E0E0E0" : undefined }}
                            rows="7"
                            cols="30"
                            placeholder="Message"
                            className="w-full border border-gray-300 rounded-sm text-sm p-3"
                            onChange={(e) => setText((prev) => ({ ...prev, message: e.target.value }))}
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="text-white bg-blue-500 p-2 rounded-sm w-40 h-10 cursor-pointer hover:bg-blue-600 transition duration-300 font-medium"
                        >
                            {result || "Send Message"}
                        </button>
                    </div>

                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Slide}
                    />
                </form>
            </div>
        </div>
    );
});

export default Contact;
