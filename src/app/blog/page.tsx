"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const BlogPage = () => {
  const posts = [
    {
      title: "Khám Phá Bài Viết 1",
      description: "Một cái nhìn sâu sắc về chủ đề thú vị trong bài viết 1, nơi bạn sẽ tìm thấy những thông tin bổ ích và hấp dẫn.",
      date: "01/01/2024",
    },
    {
      title: "Khám Phá Bài Viết 2",
      description: "Bài viết 2 mang đến những phân tích sắc bén và những quan điểm mới mẻ về vấn đề đang được quan tâm.",
      date: "02/01/2024",
    },
    {
      title: "Khám Phá Bài Viết 3",
      description: "Bài viết 3 sẽ dẫn dắt bạn qua những khía cạnh thú vị và bất ngờ mà bạn chưa từng biết đến.",
      date: "03/01/2024",
    },
  ];

  return (
    <main className="flex flex-col items-center p-6 bg-gray-900 min-h-screen">
      <motion.h1 
        className="text-5xl font-bold text-center text-white glow" // Thêm lớp glow
        whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
        transition={{ duration: 0.3 }}
      >
        Blog
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-300 mb-8 text-center mt-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Chào mừng bạn đến với blog của chúng tôi. Dưới đây là những bài viết mới nhất.
      </motion.p>

      <div className="mt-8 w-full max-w-2xl bg-gray-800 p-4 rounded-lg text-white">
        {posts.map((post, index) => (
          <div key={index} className="mb-4 p-4 border-b border-gray-700">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-400">{post.date}</p>
            <p className="mt-2">{post.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <motion.p 
          className="text-lg text-gray-300 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Chúng tôi đang hoàn thiện những nội dung thú vị hơn nữa! Hãy quay lại để khám phá thêm nhé!
        </motion.p>
        <Link href="/" className="mt-4 inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
          Quay về trang chính
        </Link>
      </div>
    </main>
  );
};

export default BlogPage; 