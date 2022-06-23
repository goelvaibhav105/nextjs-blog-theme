import { useRouter } from 'next/router'
import Head from 'next/head'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import NavBar from '../../components/NavBar'
import imageUrlBuilder from '@sanity/image-url'

const Post = ({ blog, profile }) => {
  const router = useRouter()
  let createdAtDate = blog.createdAt
  createdAtDate = new Date(createdAtDate).toDateString();
  const client = createClient({
    projectId: "6j545gpg",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)

  return <><>
    <Head>
      <meta charset="utf-8" />

      <meta content="IE=edge,chrome=1"  />

      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

      <title>{blog.title}</title>

      <meta property="og:title" content="How to become a frontend developer | Atom Template" />

      <meta property="og:locale" content="en_US" />

      <link rel="canonical" href="//post" />

      <meta property="og:url" content="//post" />

      <meta name="description"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

      <meta name="theme-color" content="#5540af" />

      <meta property="og:site_name" content="Atom Template" />

      <meta property="og:image" content="//assets/img/social.jpg" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@tailwindmade" />

      <link  href="https://fonts.gstatic.com" rel="preconnect" />

      <link as="style"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="preload" />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet" />

      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

      <link href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />

      <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>

      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>



      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css" />



    </Head>
    <NavBar profile={profile} />

    <div>
      <div className="container py-6 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="">
            <h1
              className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              {blog.title}
            </h1>
            <div className="flex items-center pt-5 md:pt-10">
              <div>
                <img src={builder.image(profile.image).width(200).url()}
                  className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                  alt="author image" />
              </div>
              <div className="pl-5">
                <span className="block font-body text-xl font-bold text-grey-10">{profile.name} </span>
                <span className="block pt-1 font-body text-xl font-bold text-grey-30">{createdAtDate}</span>
              </div>
            </div>
          </div>
          <div className="prose max-w-none pt-8">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={blog.content}
              projectId="6j545gpg"
              dataset="production"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              }}
            />

          </div>
      
        </div>
      </div>
    </div>

  

  </> </>
}

export default Post

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
    projectId: "6j545gpg",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blog, profile
    }
  }
}