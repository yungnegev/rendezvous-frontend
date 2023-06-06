import { Button } from 'antd';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  type?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined;
  danger?: boolean | undefined;
  loading?:
    | boolean
    | {
        delay?: number | undefined;
      }
    | undefined;
  shape?: 'default' | 'circle' | 'round' | undefined;
  icon?: React.ReactNode;
}

const CustomButton = ({
  children,
  htmlType,
  type = 'default',
  danger,
  loading,
  shape,
  icon,
  onClick,
}: CustomButtonProps) => {
  return (
      <Button
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
      >
        {children}
      </Button>
  );
};

export default CustomButton;
