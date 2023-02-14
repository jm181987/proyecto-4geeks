import React, { Fragment } from "react";
import {
    Accordion, Card
} from 'react-bootstrap'



export const AccordionActions = () =>{
    return(
        <Fragment>
            <Accordion>
                <Card>
                    <Card.Header>
                        <div>
                            <h3>
                                TITULO
                            </h3>
                        </div>
                    </Card.Header>
                </Card>
            </Accordion>
        </Fragment>
    )
}