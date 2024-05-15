import React from "react";
import Header from "./Header";
import img1 from '/src/assets/Jasper.png'
import { IoIosStar } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { LiaThumbsDown,LiaThumbsUp } from "react-icons/lia";


function AI_Tools() {
  return (
    <div className="dark:text-gray-100 dark:bg-black">
      <Header />
      <div className="container">
        <div className="md:w-9/12 w-full mt-12">
          <div className="mb-14">
            <div className="flex items-center gap-7 flex-wrap mb-4 w-10/12 pt-28">
              <img src={img1} height={'90px'} width={'90px'} alt="jasper" className=""></img>
              <div>
                <h1 className="text-lg text-xl lg:text-3xl font-bold">Jasper AI</h1>
                <div className="flex pt-3">
                  <IoIosStar className="text-yellow-600 text-xl me-1" />
                  <IoIosStar className="text-yellow-600 text-xl me-1" />
                  <IoIosStar className="text-yellow-600 text-xl me-1" />
                  <IoIosStar className="text-yellow-600 text-xl me-1" />
                  <IoIosStar className="text-gray-500 text-xl me-1" />
                </div>
              </div>
              <div className="flex items-center">
                <button className="dark:bg-white bg-black text-white hover:bg-transparent hover:text-black hover:border-1 hover:border-border-gray dark:text-gray-800 hover:dark:text-white border-1 border-transparent px-5 py-1 rounded-md flex items-center">
                  Visit<HiExternalLink className="ms-1"></HiExternalLink>
                </button>
                <FiBookmark className="ms-2 text-lg"></FiBookmark>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-xs md:text-sm dark:text-white text-black font-semibold">AI Categories :</span>
              <span className="text-xs md:text-sm text-blue-500"> #Content Creation, #Email Marketing, #Product Descriptions...</span>
            </div>
            <div className="mb-4">
              <span className="text-xs md:text-sm dark:text-white text-black font-semibold">Model Pricing :</span>
              <span className="text-xs md:text-sm text-blue-500"> Premium</span>
            </div>
          </div>
          <div>
            <div className="dark:bg-dark-grey border-1 border-dark-text-grey dark:border-border-gray p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">What is Jasper AI ?</h2>
              <p className="text-xs md:text-base leading-relaxed" style={{ wordSpacing: "3px" }}>
                Jasper is an AI-powered content creation tool that assists users in generating various types of content quickly and efficiently. It can help with creating articles, blog posts, social media content, emails, ad copy, product descriptions, and more. Jasper uses advanced natural language processing (NLP) algorithms to understand user input and generate coherent and engaging content.
              </p>
            </div>
            <div className="dark:bg-dark-grey border-1 dark:border-border-gray border-dark-text-grey p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl font-bold mb-5 dark:text-gray-50 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">Key Features :</h2>
              <ul className="list-disc list-inside text-xs md:text-sm">
                <li className="py-2 text-base">Content Creation: Generates articles, blog posts, social media content, emails, and more.</li>
                <li className="py-2 text-base">SEO Optimization: Enhances content for search engine visibility.</li>
                <li className="py-2 text-base">Email Marketing: Crafts content for email campaigns.</li>
                <li className="py-2 text-base">Social Media Management: Creates engaging social media posts.</li>
                <li className="py-2 text-base">Copywriting: Produces ad copy and product descriptions.</li>
                <li className="py-2 text-base">Market Research: Provides insights for content strategy.</li>
                <li className="py-2 text-base">Creative Writing: Assists with storytelling and personalized content.</li>
              </ul>
            </div>
            <div className="dark:bg-dark-grey border-1 dark:border-border-gray border-dark-text-grey p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">Problem Solving :</h2>
              <p className="text-xs md:text-base leading-relaxed" style={{ wordSpacing: "3px" }}>
                Jasper AI: Your shortcut to top-notch, SEO-friendly content for blogs, ads, emails, and social media. Save time and boost productivity with AI-powered writing!
              </p>
            </div>
            <div className="dark:bg-dark-grey border-1 dark:border-border-gray  border-dark-text-grey p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">How This Tool Helps :</h2>
              <ol className="list-decimal pl-6 ">
                <li className="py-2 text-base">Content Creation</li>
                <li className="py-2 text-base">Brand Voice Integration</li>
                <li className="py-2 text-base">SEO Optimization</li>
                <li className="py-2 text-base">Conversational AI</li>
                <li className="py-2 text-base">Real-time Language Processing</li>
                <li className="py-2 text-base">Project Management</li>
              </ol>
            </div>
            <div className="dark:bg-dark-grey border-1 dark:border-border-gray border-dark-text-grey p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">Ratings &amp; Reviews :</h2>
              <div className="flex items-center mb-4 gap-10 flex-wrap">
                <div>
                  <div className="dark:text-white text-5xl font-bold mr-4">4.2</div>
                  <p className="text-dark-text-grey text-xs pt-3 ">6,584 RATINGS</p>
                </div>
                <div>
                  <div className="flex items-center">
                  <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">5 <IoIosStar className="me-1 text-orange-500"></IoIosStar></p>
                    <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">4 <IoIosStar className="me-1 text-orange-500"></IoIosStar></p>
                    <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">3 <IoIosStar className="me-1 text-orange-500"></IoIosStar></p>
                    <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">2 <IoIosStar className="me-1 text-orange-500"></IoIosStar></p>
                    <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">1 <IoIosStar className="me-1 text-orange-500"></IoIosStar></p>
                    <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>

                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="dark:text-white text-sm font-bold mr-2 flex items-center border-e-1 border-e-border-gray pe-3">5.0 <IoIosStar className="text-yellow-600 ms-1"></IoIosStar></div>
                  <div className="ps-3 text-sm">Nice Tool!</div>
                </div>
                <div className="text-sm text-dark-text-grey py-2">John, 05/05/2024</div>
              </div>
              <div className="flex items-center justify-between pt-5">
                <div>
                  <p className="text-xs font-bold">Read More...</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center mr-4 text-xs dark:text-dark-text-grey">
                    <LiaThumbsDown className="text-base"></LiaThumbsDown>
                    <p>158</p>
                  </div>
                  <div className="flex items-center text-xs dark:text-dark-text-grey">
                  <LiaThumbsUp className="text-base"></LiaThumbsUp>
                    <p>267</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AI_Tools;
