import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import Footer from "../Footer/Footer";
import Timer from "../Timer/Timer";

const Home = () => {
	return (
		<>
			<div className="home-back h-full w-full">
				{/* <img
					src={homeback}
					alt="Background"
					className={`absolute top-0 left-0 w-full h-full object-cover  transition-opacity duration-500 `}
				/> */}
				<Navbar />
				<motion.div
					exit="out"
					animate="in"
					initial="init"
					variants={pageVariants}
					transition={pageTransition}>
					<div className={` relative z-10 transition-opacity duration-500 `}>
						<div className="text-white h-[91.7vh] flex justify-center pt-28 items-center flex-col p-14 ">
							<div className="w-[60%]">
								<div className="text-5xl fade-out text-center WitchMagic">
									<span className="text-glow">WELCOME TO </span>
									<span className="text-orange-500 text-6xl MagnificentSerif">
										Z3R0D4Y
									</span>{" "}
									<span className="text-glow">CTF !</span>
								</div>
								<div className="text-center move-up text-lg trick-or-treats mt-8">
									October marks Cybersecurity Awareness Month, an important time
									to emphasize the need for online safety. As our lives become
									more digital, safeguarding personal and professional
									information is vital. This month serves as a reminder to adopt
									smart security practices, like using strong, unique passwords,
									enabling multi-factor authentication, and being careful with
									personal data. By staying informed and proactive, we can
									shield ourselves and our organizations from cyber threats,
									helping create a safer internet for all.
								</div>
							</div>
							<Timer />
						</div>
					</div>
				</motion.div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
