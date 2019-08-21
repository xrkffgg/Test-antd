import Sidebar from '../components/Sidebar';
import Rumb from '../components/Rumb';
import S from './Styles.css';

function BasicLayout(props) {
  return (
    <div className={S.Main}>
      <div className={S.Sidebarbox}>
        <div className={S.title}>智能安检管理系统</div>
        <Sidebar/>
      </div>
      <div className={S.contentbox}>
        <div className={S.rumb}>
          <Rumb/>
        </div>
        <div className={S.content}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default BasicLayout;
