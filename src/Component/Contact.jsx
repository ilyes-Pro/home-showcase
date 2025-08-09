import React, { forwardRef, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { motion } from "framer-motion";
const Contact = forwardRef((props, ref) => {
    const [result, setResult] = useState("");
    const [text, setText] = useState({
        name: "",
        message: "",
        email: ""
    });

    const [errors, setErrors] = useState([]); // تحديد الحقول التي بها أخطاء

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
            setText({ name: "", message: "", email: "" });
            setErrors([]);
            event.target.reset();
        } else {
            toast.error("Message failed to send.");
            console.log("Error", data);
            setResult(data.message);
        }
    };

    const check = (event) => {
        event.preventDefault();

        const currentErrors = [];

        if (!text.name.trim()) currentErrors.push("name");
        if (!text.message.trim()) currentErrors.push("message");
        if (!text.email.trim()) currentErrors.push("email");

        setErrors(currentErrors); // تحديث الحقول ذات الأخطاء

        if (currentErrors.length > 0) {
            const errorMessage = `Please enter your ${currentErrors.join(" and ")}`;
            toast.error(errorMessage);
            return;
        }

        onSubmit(event);
    };

    // دالة لمساعدتنا على التحقق من وجود خطأ في حقل معين
    const hasError = (field) => errors.includes(field);

    return (
        <div className="pb-24 dark:bg-black" ref={ref}>
            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                // animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.9 }}
            >

                <h1 className='text-center pt-5 text-3xl mb-1.5 dark:text-white'>
                    <span className="font-bold">Contact </span>
                    <span className="underline">With Us</span>
                </h1>
                <p className='text-center mb-11 text-[var(--color-secand)] font-[var(--font-main)]'>
                    Ready to Make a Move? Let's Build Your Future Together
                </p>

            </motion.div>
            <motion.div

                className="flex justify-center"
                initial={{ opacity: 0 }}
                // animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
            >



                <form onSubmit={check} className="flex flex-col sm:w-7/12 w-10/12 gap-6">

                    <input type="hidden" name="access_key" value="f470e72a-2a9b-4ac2-8bf1-05e10d311bbb" />

                    <div className="flex gap-3">
                        <div className="w-6/12">
                            <p className="dark:text-white">Your Name</p>
                            <input
                                type="text"
                                name="name"
                                value={text.name}
                                className={`h-9 w-full rounded-sm text-sm p-3 ${hasError("name") ? "border-2 border-red-500" : "border border-gray-300"
                                    }`}
                                placeholder="Your Name"
                                onChange={(e) => setText((prev) => ({ ...prev, name: e.target.value }))}
                            />
                        </div>
                        <div className="w-6/12">
                            <p className="dark:text-white">Your Email</p>
                            <input
                                type="email"
                                name="email"
                                value={text.email}
                                className={`h-9 w-full rounded-sm text-sm p-3 ${hasError("email") ? "border-2 border-red-500" : "border border-gray-300"
                                    }`}
                                placeholder="Your Email"
                                onChange={(e) => setText((prev) => ({ ...prev, email: e.target.value }))}
                            />
                        </div>
                    </div>

                    <div>
                        <p className="dark:text-white">Message</p>
                        <textarea
                            name="message"
                            value={text.message}
                            rows="7"
                            cols="30"
                            placeholder="Message"
                            className={`w-full rounded-sm text-sm p-3 ${hasError("message") ? "border-2 border-red-500" : "border border-gray-300"
                                }`}
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
            </motion.div>


        </div>
    );
});

export default Contact;
