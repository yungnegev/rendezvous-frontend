import { Button, Result, Row } from 'antd'
import { Link, useParams } from 'react-router-dom'


const Status = () => {

  const statuses: Record<string, string> = {
    created: 'Created successfully',
    updated: 'Updated successfully',
    deleted: 'Deleted successfully',
  } 

  const { status } = useParams()

  return (
    <Row align='middle' justify='center' style={{ width: '100%' }}>
        <Result
            status={ status ? 'success' : 404 }
            title={ status ? statuses[status] : 'Not found' }
            extra={
                <Button>
                    <Link to='/'>Home</Link>
                </Button>
            }        
        />
    </Row>
  )
}

export default Status