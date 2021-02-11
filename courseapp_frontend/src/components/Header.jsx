import React from 'react'
import {Card, CardBody} from 'reactstrap'

function Header() {
    return (
        <div className="text-light">
            <Card className="my-2 bg-mine">
                <CardBody>
                    <h1 className="text-center my-2">Welcome to Course Manager App</h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header
