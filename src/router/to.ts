import { useRouter } from "vue-router";
const router = useRouter();
const to = (path: string): (() => void) => {
  return () => {
    router.push(path);
  };
};

export default to;
