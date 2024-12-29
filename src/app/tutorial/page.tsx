"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const TutorialPage = () => {
  return (
    <main className="flex flex-col items-center p-6 bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen">
      <motion.h1 
        className="text-6xl font-extrabold text-center text-yellow-300 glow" // Thêm lớp glow
        whileHover={{ scale: 1.1, rotateY: 15, rotateX: 15 }}
        transition={{ duration: 0.3 }}
      >
        Vui lòng quay lại sau, chúng tôi đang hoàn thiện tài liệu
      </motion.h1>
      <motion.p 
        className="text-xl text-white mb-8 text-center mt-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        Chúng tôi đang hoàn thiện tài liệu. Cảm ơn bạn đã kiên nhẫn!
      </motion.p>
      <motion.div 
        className="w-32 h-32 mb-4" // Hình con hổ đánh nhau
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        animate={{ rotate: [0, 15, -15, 0], y: [0, -15, 0] }} // Hiệu ứng động cho con hổ
      >
        <motion.img 
          src="/tiger-fighting.png" 
          alt="Hổ đánh nhau" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <Link href="/" className="mt-4 inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
        Quay về trang chính
      </Link>
    </main>
  );
};

export default TutorialPage;
