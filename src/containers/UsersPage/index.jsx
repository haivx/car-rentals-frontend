import React, { useState } from 'react';
import Modal from 'common/components/Modal';

const EditUser = () => <div>Edit user</div>;

export const UsersPage = () => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const faker = [
    {
      id: 1,
      name: 'Liam',
      email: 'Liam@gmail.com',
      phone: '088888888',
      firstName: 'Liam',
      lastName: 'Vo',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Ryan',
      email: 'ryan@gmail.com',
      phone: '088888888',
      firstName: 'Ryan',
      lastName: 'Vo',
      role: 'Mod',
    },
    {
      id: 3,
      name: 'Steve',
      email: 'steve@gmail.com',
      phone: '088888888',
      firstName: 'Steve',
      lastName: 'Vo',
      role: 'Mod',
    },
    {
      id: 4,
      name: 'Cris',
      email: 'Cris@gmail.com',
      phone: '088888888',
      firstName: 'Cris',
      lastName: 'Nguyen',
      role: 'Mod',
    },
  ];

  const onEdit = (id) => {
    setVisibleEdit(true);
  };

  const onClose = () => {
    setVisibleEdit(false);
  };

  return (
    <>
      <div className="bg-white">
        <p class="h1">List Users</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" style={{ width: 250 }}>
                Name
              </th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col" style={{ width: 350 }}>
                Email
              </th>
              <th scope="col">Phone</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {faker.map((item, idx) => {
              return (
                <tr>
                  <th scope="row">{idx + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button type="button" class="btn btn-primary" onClick={() => onEdit(item.id)}>
                      Edit
                    </button>
                    <button type="button" class="btn btn-light ml-4">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal visible={visibleEdit} title="Edit User" content={<EditUser />} onClose={onClose} />
    </>
  );
};
