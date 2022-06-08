import React, {memo, ReactElement} from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import styles from './SideComments.module.scss';

const items = [
  {
    user: {
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
  {
    user: {
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
  {
    user: {
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
];

interface CommentItemProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}





const CommentItem = memo (function CommentItem(props:CommentItemProps):ReactElement{
  const {user,text,post} = props
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" />
        <a href="src/components/SideComments/index#">
          <b>{user.fullname}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="src/components/SideComments/index#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
});

export const SideComments = () => {
  return (
    <div className={styles.root}>
      <h3>
        Комментарии <ArrowRightIcon />
      </h3>
      {items.map((obj,index) => (
        <CommentItem key={index} {...obj} />
      ))}
    </div>
  );
};
