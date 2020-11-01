import React from "react";
import { List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import classNames from "classnames";

interface TodoListPropsType {
  todos: any[];
  onToggleFinished?: (params: any) => {};
}

const TodoList: React.FC<TodoListPropsType> = ({
  todos,
  onToggleFinished = () => {},
}) => {
  const onDelete = (e: any) => {
    e.stopPropagation();
    // delete
  };

  return (
    <div className="list-wrap">
      {todos.length === 0 ? (
        <p>Empty</p>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={(item: any) => {
            const className = classNames({
              "list-item": true,
              "list-item__finished": item.finished,
            });
            return (
              <List.Item className={className}>
                <div
                  onClick={() => onToggleFinished(item.id)}
                  className="list-item-wrap"
                >
                  <span className="list-item-text">{item.text}</span>
                  <DeleteOutlined onClick={onDelete} />
                </div>
              </List.Item>
            );
          }}
        />
      )}
    </div>
  );
};

export default TodoList;
