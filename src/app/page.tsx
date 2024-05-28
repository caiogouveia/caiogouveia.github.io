import Container from "@/app/components/container";
import { Intro } from "@/app/components/intro";
import Cv from "@/app/components/cv";
import { MoreStories } from "@/app/components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const morePosts = getAllPosts();
  return (
    <main>
      <Container>
        <Intro />
        <Cv />
        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </main>
  );
}
