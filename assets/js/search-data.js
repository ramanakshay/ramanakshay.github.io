// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Some projects I have worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-books",
          title: "Books",
          description: "Some books I have read.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "books-the-ultimate-hitchhiker-39-s-guide-to-the-galaxy-douglas-adams",
          title: 'The Ultimate Hitchhiker&amp;#39;s Guide To The Galaxy - Douglas Adams',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2_book/";
            },},{id: "books-sapiens-a-brief-history-of-humankind-yuval-noah-harari",
          title: 'Sapiens: A Brief History of Humankind - Yuval Noah Harari',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/3_book/";
            },},{id: "books-crime-and-punishment-fyodor-dostoevsky",
          title: 'Crime and Punishment - Fyodor Dostoevsky',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/4_book/";
            },},{id: "books-12-rules-for-life-jordan-peterson",
          title: '12 Rules for Life - Jordan Peterson',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/5_book/";
            },},{id: "books-one-hundred-years-of-solitude-gabriel-garcía-márquez",
          title: 'One Hundred Years of Solitude - Gabriel García Márquez',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/6_book/";
            },},{id: "books-dune-frank-herbert",
          title: 'Dune - Frank Herbert',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/7_book/";
            },},{id: "books-cosmos-carl-sagan",
          title: 'Cosmos - Carl Sagan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/8_book/";
            },},{id: "books-the-count-of-monte-cristo-alexandre-dumas",
          title: 'The Count of Monte Cristo - Alexandre Dumas',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/9_book/";
            },},{id: "books-the-man-who-mistook-his-wife-for-a-hat-oliver-sacks",
          title: 'The Man Who Mistook His Wife for a Hat - Oliver Sacks',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/10_book/";
            },},{id: "books-animal-farm-george-orwell",
          title: 'Animal Farm - George Orwell',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/11_book/";
            },},{id: "books-siddhartha-hermann-hesse",
          title: 'Siddhartha - Hermann Hesse',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/12_book/";
            },},{id: "books-flowers-for-algernon-daniel-keyes",
          title: 'Flowers for Algernon - Daniel Keyes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/13_book/";
            },},{id: "books-harry-potter-and-the-sorcerer-39-s-stone-j-k-rowling",
          title: 'Harry Potter and the Sorcerer&amp;#39;s Stone - J. K. Rowling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/14_book/";
            },},{id: "books-musicophilia-tales-of-music-and-the-brain-oliver-sacks",
          title: 'Musicophilia: Tales of Music and the Brain - Oliver Sacks',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/15_book/";
            },},{id: "books-harry-potter-and-the-chamber-of-secrets-j-k-rowling",
          title: 'Harry Potter and the Chamber of Secrets - J. K. Rowling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/16_book/";
            },},{id: "books-1984-george-orwell",
          title: '1984 - George Orwell',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1_book/";
            },},{id: "books-harry-potter-and-the-prisoner-of-askaban-j-k-rowling",
          title: 'Harry Potter and the Prisoner of Askaban - J. K. Rowling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/17_book/";
            },},{id: "books-and-then-there-were-none-agatha-christie",
          title: 'And Then There Were None - Agatha Christie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/18_book/";
            },},{id: "books-harry-potter-and-the-goblet-of-fire-j-k-rowling",
          title: 'Harry Potter and the Goblet of Fire - J. K. Rowling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/19_book/";
            },},{id: "books-the-dragons-of-eden-carl-sagan",
          title: 'The Dragons of Eden - Carl Sagan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/20_book/";
            },},{id: "books-harry-potter-and-the-order-of-the-phoenix-j-k-rowling",
          title: 'Harry Potter and the Order of the Phoenix - J. K. Rowling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/21_book/";
            },},{id: "books-the-book-thief-markus-zusak",
          title: 'The Book Thief - Markus Zusak',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/22_book/";
            },},{id: "books-harry-potter-and-the-half-blood-prince-j-k-rowling",
          title: 'Harry Potter and the Half-Blood Prince - J. K. Rowling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/23_book/";
            },},{id: "books-meditations-marcus-aurelius",
          title: 'Meditations - Marcus Aurelius',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/24_book/";
            },},{id: "books-harry-potter-and-the-deathly-hallows-j-k-rowling",
          title: 'Harry Potter and the Deathly Hallows - J. K. Rowling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/25_book/";
            },},{id: "books-brief-answers-to-the-big-questions-stephen-hawking",
          title: 'Brief Answers to the Big Questions - Stephen Hawking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/26_book/";
            },},{id: "books-contact-carl-sagan",
          title: 'Contact - Carl Sagan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/27_book/";
            },},{id: "books-cat-39-s-cradle-kurt-vonnegut",
          title: 'Cat&amp;#39;s Cradle - Kurt Vonnegut',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/28_book/";
            },},{id: "books-the-selfish-gene-richard-dawkins",
          title: 'The Selfish Gene - Richard Dawkins',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/29_book/";
            },},{id: "books-the-song-of-achilles-madeline-miller",
          title: 'The Song of Achilles - Madeline Miller',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/30_book/";
            },},{id: "books-atomic-habits-james-clear",
          title: 'Atomic Habits - James Clear',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/31_book/";
            },},{id: "books-down-and-out-in-paris-and-london-george-orwell",
          title: 'Down and Out in Paris and London - George Orwell',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/32_book/";
            },},{id: "books-11-22-63-stephen-king",
          title: '11/22/63 - Stephen King',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/33_book/";
            },},{id: "books-lord-of-the-rings-the-fellowship-of-the-ring-j-r-r-tolkien",
          title: 'Lord of the Rings: The Fellowship Of The Ring - J.R.R. Tolkien',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/35_book/";
            },},{id: "books-on-writing-stephen-king",
          title: 'On Writing - Stephen King',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/36_book/";
            },},{id: "books-reflections-p-g-raman",
          title: 'Reflections - P.G. Raman',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/34_book/";
            },},{id: "books-the-midnight-library-matt-haig",
          title: 'The Midnight Library - Matt Haig',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/37_book/";
            },},{id: "books-notes-from-underground-fyodor-dostoevsky",
          title: 'Notes from Underground - Fyodor Dostoevsky',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/38_book/";
            },},{id: "books-slaughterhouse-five-kurt-vonnegut",
          title: 'Slaughterhouse-Five - Kurt Vonnegut',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/39_book/";
            },},{id: "books-how-to-be-yourself-ellen-hendriksen",
          title: 'How to Be Yourself - Ellen Hendriksen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/40_book/";
            },},{id: "books-the-double-fyodor-dostoevsky",
          title: 'The Double - Fyodor Dostoevsky',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/41_book/";
            },},{id: "books-a-thousand-splendid-suns-khaled-hosseini",
          title: 'A Thousand Splendid Suns - Khaled Hosseini',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/42_book/";
            },},{id: "news-sparkles-launched-my-personal-website",
          title: ':sparkles: Launched my personal website!',
          description: "",
          section: "News",},{id: "news-graduated-from-vellore-institute-of-technology-with-a-bachelor-s-degree-in-computer-science-and-engineering",
          title: '🎓 Graduated from Vellore Institute of Technology with a Bachelor’s degree in Computer...',
          description: "",
          section: "News",},{id: "news-graduated-from-new-york-university-with-a-master-s-degree-in-computer-science-ai-specialization",
          title: '🎓 Graduated from New York University with a Master’s degree in Computer Science...',
          description: "",
          section: "News",},{id: "projects-diabetic-retinopathy-detection",
          title: 'Diabetic Retinopathy Detection',
          description: "Trained large-scale CNNs to predict diabetic retinopathy (an eye disease) from a noisy dataset of retinal images. Generated heatmaps using Grad-CAM to identify parts of the image which had the most impact on model prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/retina/";
            },},{id: "projects-multi-lingual-question-answering",
          title: 'Multi-lingual Question Answering',
          description: "Built an multi-lingual question answering system using the HuggingFace API on syntactic rules from multiple languages. Finetuned BERT on the SQUAD dataset augmented with multiple question variants using back translation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qasystem/";
            },},{id: "projects-solving-optimal-transport-using-deep-neural-networks",
          title: 'Solving Optimal Transport using Deep Neural Networks',
          description: "Developed gradient-based DNN appoximators to solve the optimal transport problem for high-dimensional data. Aimed to study application of OT in Density Functional Theory (DFT) to study dissociation of atoms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/neural_ot/";
            },},{id: "projects-continual-learning-for-policy-gradient-methods",
          title: 'Continual Learning for Policy Gradient Methods',
          description: "Developed novel incremental learning algorithms to train reinforcment learning agents on a variety of real-world environments. Modified batch-wise policy gradient methods using eligibility traces to eliminate data buffers, particularly for long horizon tasks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/continual_rl/";
            },},{id: "projects-hierarchical-clip-based-image-geolocation-prediction",
          title: 'Hierarchical CLIP-based Image Geolocation Prediction',
          description: "Trained a CLIP-inspired image geolocation model that predicts the precise location of an image taken anywhere on earth. Designed a novel inference approach based on hierarchical feature clustering which achieves comparable performance while being ~100x more efficient than previous methods.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/geoclip/";
            },},{id: "projects-canvas-a-template-for-deep-learning-projects",
          title: 'Canvas - A Template for Deep Learning Projects',
          description: "Designed a flexible deep learning project template using pytorch and hydra. The template is based on the agent-environment interface in RL and supports all kinds of machine learning tasks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/canvas/";
            },},{id: "projects-finetuning-video-diffusion-models-for-multi-view-consistency",
          title: 'Finetuning Video Diffusion Models for Multi-view Consistency',
          description: "Fine-tuned a video diffusion model to generate multi-view consistent object renderings from single-view inputs. Demonstrated that a curated high-quality 1% subset (10K objects) of the Objaverse dataset achieved performance comparable to full-scale training. (1M+ objects).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/finetune_svd/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%6D%61%6E%61%6B%73%68%61%79%31%31%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ramanakshay", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ramanakshay", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
