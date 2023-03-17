import React from "react";
import Header from "./Header";

const Blogs = () => {
  const tips = [
    {
      title: "5 Simple Tips for Better Sleep",
      description:
        "In this blog, we explore practical tips for improving sleep quality, including creating a relaxing bedtime routine, avoiding caffeine and electronics before bed, and investing in a comfortable mattress and pillows.",
    },
    {
      title: "The Benefits of a Plant-Based Diet",
      description:
        "This blog examines the benefits of a plant-based diet for overall health and wellness, including reduced risk of chronic diseases, improved digestion, and increased energy levels. We provide tips for transitioning to a plant-based diet and recommend nutrient-rich plant-based foods to incorporate into your meals.",
    },
    {
      title: "How to Stay Active When You Have a Desk Job",
      description:
        "Many people spend long hours sitting at a desk, which can lead to negative health effects such as back pain and reduced mobility. In this blog, we provide tips for staying active during the workday, including stretching, taking breaks to walk or stretch, and incorporating exercise into your daily routine.",
    },
    {
      title:
        "The Importance of Mental Health: Tips for Coping with Stress and Anxiety",
      description:
        "In this blog, we discuss the importance of mental health and provide tips for managing stress and anxiety. We explore techniques such as mindfulness, exercise, and talking to a mental health professional to help improve mental well-being.",
    },
    {
      title: "5 Ways to Boost Your Immune System Naturally",
      description:
        "With cold and flu season upon us, it's important to take steps to boost your immune system naturally. This blog explores simple lifestyle changes that can improve your immune system, including eating nutrient-rich foods, staying hydrated, getting adequate sleep, and reducing stress.",
    },
    {
      title:
        "The Dangers of Sitting: How to Incorporate More Movement into Your Day",
      description:
        "Many people spend the majority of their day sitting, which can have negative health effects such as poor posture and reduced mobility. In this blog, we provide tips for incorporating more movement into your day, including taking walking breaks, using a standing desk, and incorporating exercise into your daily routine.",
    },
    {
      title: "Healthy Habits for Better Skin",
      description:
        "In this blog, we explore healthy habits that can improve the health and appearance of your skin, including staying hydrated, protecting your skin from the sun, and eating nutrient-rich foods that support skin health. We also provide tips for developing a daily skincare routine that can help you achieve a healthy, glowing complexion.",
    },
  ];
  return (
    <div>
      <Header />
      <section class="">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-orange-600 ">
              Our Blog
            </h2>
            <p class="font-light text-orange-500 sm:text-xl ">
              We use an best approach to get services in easiest way and connect
              with the needs of your audience early and often.
            </p>
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            {tips.map((tip, index) => (
              <article class="p-6 rounded-lg border border-orange-500 shadow-md bg-orange-780 hover:border-orange-600">
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">
                  <a href="#">{tip.title}</a>
                </h2>
                <p class="mb-5 font-light text-gray-500 ">
                {tip.description}
                </p>

                <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                  </div>
                  <a
                    href="#"
                    class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      class="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
