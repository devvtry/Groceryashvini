import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Select, Switch, Tooltip, Upload, message, } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';

import { UploadOutlined } from '@ant-design/icons';

function CatForm({ user, onFinish, changePasswordModal, loading }) {


  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  return (
    <>
      <Form
        name="user_details_form"
        className="login-form"
        initialValues={user}
        onFinish={onFinish}
        layout="vertical"
        size="large"
        style={{ clear: 'both' }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Category name"
              rules={[
                {
                  required: true,
                  message: 'Please input full name!'
                }
              ]}
            >
              <Input
                // prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Fruits & Vegetables"
              />
            </Form.Item>

            Select image s 
            <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>,


          </Col>
        </Row>

       

        {/* <Form.Item label="Active Status" name="isActive">
          <Switch defaultChecked={user ? user.isActive : false} />
        </Form.Item> */}

        <Form.Item>
          <Button
            type="primary"
            loading={loading}
            htmlType="submit"
            className="mr-2"
            disabled={loading}
          >
            Save
          </Button>
          <Button type="info" className="login-form-button">
            <Link to="/dashboard/categories">Back</Link>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CatForm;
