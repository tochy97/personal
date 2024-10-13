import { useQuery } from '@apollo/client';
import { GET_CONTENT } from '../model/queries';
import { contentVar } from '../apollo';

export default function ContentController() {
  const { data } = useQuery(GET_CONTENT);

  return {
    current: data.content.current,
    changeContent(current: string) {
      contentVar({ current: current });
    }
  };
}