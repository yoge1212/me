import ProfileCard from '../components/hero';
import WorkHistory from '@/components/work';
import ProjectsGallery from '@/components/projects';
import RecentPosts from '@/components/recent';

export default function Home() {
  return (
    <div>
      <ProfileCard />
      <div className="sm:flex justify-start mt-8 px-4 gap-x-15">
        <WorkHistory />

        <ProjectsGallery />
      </div>

      <RecentPosts />
    </div>
  );
}
