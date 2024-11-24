import { useQuery } from '@apollo/client';
import { GET_CONTENT } from '../../apollo/queries';
import { contentVar } from '../../apollo/apollo';

export default function Controller() {
  const { data } = useQuery(GET_CONTENT);
  return {
    current: data.content.current,
    changeContent(current: string) {
      contentVar({ 
        current: current,
       });
    }
  };
}