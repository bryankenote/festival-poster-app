import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Group, GroupProps } from './Group';

interface Props extends GroupProps {
  active: boolean;
  toggle: () => void;
}

export const ModalGroup: React.FC<Props> = ({
  children,
  active,
  toggle,
  ...groupProps
}) => {
  const { currentPage } = groupProps;
  const lastPage = React.Children.count(children) - 1;
  return (
    <div>
      <Modal size='lg' isOpen={active}>
        <ModalHeader toggle={toggle}>Test Header</ModalHeader>
        <ModalBody>
          <Group {...groupProps}>{children}</Group>
        </ModalBody>
        <ModalFooter>
          {currentPage > 0 && (
            <Button color='secondary' onClick={groupProps.onPrevPage}>
              Previous
            </Button>
          )}
          {currentPage < lastPage && (
            <Button color='primary' onClick={groupProps.onNextPage}>
              Next
            </Button>
          )}
          {currentPage === lastPage && (
            <Button
              color='success'
              onClick={() => {
                groupProps.onSubmit();
                toggle();
              }}
            >
              Submit
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};
