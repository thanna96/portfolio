import React, {FC, useState} from 'react';
import {Layout} from 'antd';
import {SideNav} from './SideNav';

const {Content} = Layout;
/**
 *
 * @constructor
 */
export const MainLayout: FC = function() {
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = (o: boolean) => {
    setCollapsed(o);
  };
  return <div className="min-h-screen">
    <Layout>
      <SideNav collapsed={collapsed} onClick={onCollapse}/>
      <Layout>
        <Content>
          <div className="p-6">Home</div>
        </Content>
      </Layout>
    </Layout>
  </div>;
};

export default MainLayout;
