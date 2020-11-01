import React, { useState, useEffect } from "react";
import TodoInput from "./todo-input";
import TodoList from "./todo-list";
import { Spin, Tabs } from "antd";
import { fetchTodos, toggleTodo } from "./api";
import { useRequest, useWithLoading } from "./hook";

import "antd/dist/antd.css";
import "./style.css";

const { TabPane } = Tabs;

const TAB_ALL = "all";
const TAB_FINISHED = "finished";
const TAB_UNFINISHED = "unfinished";
const tabMap = {
  [TAB_ALL]: "All",
  [TAB_FINISHED]: "Finished",
  [TAB_UNFINISHED]: "Unfinished",
};

interface HomeProps {}

/* Home */
const Home: React.FC<HomeProps> = () => {
  const [activeTab, setActiveTab] = useState<string>(TAB_ALL);

  // 数据获取逻辑
  const [query, setQuery] = useState("");
  const {
    data: { result: todos = [] },
    loading: listLoading,
  } = useRequest(() => {
    return fetchTodos({ query, tab: activeTab });
  }, [query, activeTab]);

  // placeHolder
  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    setPlaceholder(`Search in ${activeTab} list`);
  }, [activeTab]);

  // 完成todo逻辑
  const { func: onToggleFinished, loading: toggleLoading } = useWithLoading(
    async (id: any) => {
      await toggleTodo(id);
    }
  );

  const loading = !!listLoading || !!toggleLoading;

  return (
    <>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab={tabMap[TAB_ALL]} key={TAB_ALL} />
        <TabPane tab={tabMap[TAB_FINISHED]} key={TAB_FINISHED} />
        <TabPane tab={tabMap[TAB_UNFINISHED]} key={TAB_UNFINISHED} />
      </Tabs>
      <div className="app-wrap">
        <h1 className="app-title">Todo List</h1>
        <TodoInput placeholder={placeholder} onSetQuery={setQuery} />
        <Spin spinning={loading} tip="Loading...">
          <TodoList todos={todos} onToggleFinished={onToggleFinished} />
        </Spin>
      </div>
    </>
  );
};

export default Home;
