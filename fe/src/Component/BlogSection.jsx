import React, { useRef, useState } from "react";
import "./BlogSection.css"; // Import CSS for styling

// Import local images
import blog1 from "../assets/l1.jpg";
import blog2 from "../assets/l2.png";
import blog3 from "../assets/l1.jpg";
import blog4 from "../assets/l2.png";
import blog5 from "../assets/l1.jpg";

const blogs = [
  {
    id: 1,
    title: "Understanding Personal Loans",
    description: "Learn how personal loans work and how to get the best interest rates.",
    image: blog1,
    content: "A personal loan is an unsecured loan that can be used for various purposes...",
    Description: "A personal loan is an unsecured loan that helps individuals cover various expenses like medical bills, education, home renovation, or emergencies. Unlike secured loans, it doesn’t require collateral, making it accessible to many. Banks and financial institutions offer personal loans based on credit score, income, and repayment capacity. Interest rates vary, typically ranging from 10% to 24%, depending on the applicant's creditworthiness. Repayment terms usually span from 12 to 60 months. Proper financial planning ensures timely repayment, avoiding penalties and improving credit scores. Personal loans can be a great financial tool when used responsibly for necessary expenses."
  },
  {
    id: 2,
    title: "Mortgage Loans Explained",
    description: "Everything you need to know about securing a mortgage loan.",
    image: blog2,
    content: "Mortgage loans allow you to purchase property with structured payments...",
    Description: "A mortgage loan is a secured loan where borrowers pledge real estate as collateral. It helps individuals purchase homes or refinance existing properties. The loan amount depends on the property value, applicant’s credit history, and repayment ability. Mortgage loans typically have interest rates between 6% to 12%, with repayment tenures of up to 30 years. Borrowers can choose between fixed and floating interest rates. Timely payments improve credit scores and provide long-term financial security. Government-backed mortgage schemes often provide lower interest rates. Understanding loan terms, EMIs, and interest calculations is essential before applying for a mortgage."
  },
  {
    id: 3,
    title: "Business Loan Benefits",
    description: "How business loans help entrepreneurs grow their companies.",
    image: blog3,
    content: "A business loan provides the necessary funding for expanding operations...",
    Description: "A business loan is financial assistance provided to startups, SMEs, and corporations to expand operations, purchase equipment, or manage working capital. These loans come in different forms: term loans, overdrafts, invoice financing, and credit lines. Interest rates range from 8% to 18%, depending on the borrower’s creditworthiness. Repayment tenures can be short-term (1-3 years) or long-term (up to 10 years). Government schemes like MSME loans offer lower interest rates for small businesses. A strong business plan, cash flow statements, and financial projections increase loan approval chances. Business loans help entrepreneurs scale operations and sustain growth."
  },
  {
    id: 4,
    title: "Education Loans: What to Know",
    description: "Find out the best options for funding your higher education.",
    image: blog4,
    content: "Education loans help students afford tuition fees and living expenses...",
    Description: "Education loans provide financial support to students pursuing higher education in India and abroad. These loans cover tuition fees, accommodation, books, and travel expenses. Banks and NBFCs offer loans with interest rates between 8% to 15%, with flexible repayment terms starting after course completion. Loan amounts depend on the course, institution, and borrower’s financial background. Many education loans require a guarantor or collateral for approval. Government-backed subsidized education loans help economically weaker students with reduced interest rates. Timely repayment helps in building a good credit score, ensuring financial stability for future loans and credit facilities."
  },
  {
    id: 5,
    title: "Car Loan Tips",
    description: "Best practices for getting a low-interest car loan.",
    image: blog5,
    content: "Car loans enable buyers to finance vehicle purchases through monthly payments...",
    Description: "A car loan is a secured loan used to purchase a new or used vehicle, where the car itself serves as collateral. Loan amounts typically cover 80% to 100% of the car’s on-road price, depending on the lender’s policies. Interest rates range from 7% to 15%, with repayment terms of 3 to 7 years. A good credit score improves loan eligibility and ensures lower interest rates. Comparing different lenders, negotiating interest rates, and choosing a shorter tenure can help save money. Pre-approved car loans offer quick disbursals, making it easier for buyers to get their dream vehicle."
  },
];

const BlogSection = () => {
  const scrollRef = useRef(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Scroll Left (Move by 900px = 3 Cards)
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -900, behavior: "smooth" });
    }
  };

  // Scroll Right (Move by 900px = 3 Cards)
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  // Open Modal with Blog Details
  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-container">
      <h2>LATEST BLOGS</h2>
      
      {/* Scroll Left Button */}
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>

      {/* Blog Slider */}
      <div className="blog-slider" ref={scrollRef}>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button onClick={() => openBlogModal(blog)}>Read More</button>
          </div>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button className="scroll-button right" onClick={scrollRight}>&gt;</button>

      {/* Modal for Blog Details */}
      {selectedBlog && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedBlog.title}</h2>
            <img src={selectedBlog.image} alt={selectedBlog.title} />
            <p>{selectedBlog.Description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
