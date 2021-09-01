import React, {FC} from 'react';
import {Menu, Layout} from 'antd';

const {Sider} = Layout;
/**
 *
 * @constructor
 */
export const SideNav: FC<StatusType> = function({
  collapsed = true,
  onClick,
}: StatusType) {
  return (
    <Sider
      className="min-h-screen"
      collapsible collapsed={collapsed} onCollapse={onClick}>
      <Menu/>
    </Sider>
  );
};

type StatusType = {
  collapsed: boolean;
  onClick: (o: any) => void;
};
