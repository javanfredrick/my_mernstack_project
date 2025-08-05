import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, Card, Button, Input, FormGroup, Label, Heading, Text, Flex, Grid } from '../styles/AppStyles';

const ProfileContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
`;

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
  };

  return (
    <ProfileContainer>
      <Container>
        <ProfileHeader>
          <Avatar>
            {getInitials(user?.firstName, user?.lastName)}
          </Avatar>
          <Heading size="2xl">
            {user?.firstName} {user?.lastName}
          </Heading>
          <Text color="gray">{user?.email}</Text>
        </ProfileHeader>

        <Grid>
          <Card>
            <Flex justify="space-between" align="center" style={{ marginBottom: '1.5rem' }}>
              <Heading size="lg">Personal Information</Heading>
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </Button>
            </Flex>

            <FormGroup>
              <Label>First Name</Label>
              <Input
                defaultValue={user?.firstName}
                disabled={!isEditing}
              />
            </FormGroup>

            <FormGroup>
              <Label>Last Name</Label>
              <Input
                defaultValue={user?.lastName}
                disabled={!isEditing}
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                defaultValue={user?.email}
                disabled={true}
              />
            </FormGroup>

            {isEditing && (
              <Button style={{ width: '100%' }}>
                Save Changes
              </Button>
            )}
          </Card>

          <Card>
            <Heading size="lg" style={{ marginBottom: '1.5rem' }}>
              Account Settings
            </Heading>

            <FormGroup>
              <Button variant="outline" style={{ width: '100%', marginBottom: '0.75rem' }}>
                Change Password
              </Button>
            </FormGroup>

            <FormGroup>
              <Button variant="outline" style={{ width: '100%', marginBottom: '0.75rem' }}>
                Two-Factor Authentication
              </Button>
            </FormGroup>

            <FormGroup>
              <Button variant="outline" style={{ width: '100%', marginBottom: '0.75rem' }}>
                Notification Preferences
              </Button>
            </FormGroup>

            <FormGroup>
              <Button variant="outline" style={{ width: '100%', marginBottom: '0.75rem' }}>
                Privacy Settings
              </Button>
            </FormGroup>
          </Card>
        </Grid>

        <Card style={{ marginTop: '2rem' }}>
          <Heading size="lg" style={{ marginBottom: '1rem' }}>
            Account Statistics
          </Heading>
          <Grid>
            <div style={{ textAlign: 'center' }}>
              <Text size="2xl" weight="700" color="primary">12</Text>
              <Text color="gray">Projects Created</Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text size="2xl" weight="700" color="primary">156</Text>
              <Text color="gray">Tasks Completed</Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text size="2xl" weight="700" color="primary">89%</Text>
              <Text color="gray">Success Rate</Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text size="2xl" weight="700" color="primary">30</Text>
              <Text color="gray">Days Active</Text>
            </div>
          </Grid>
        </Card>
      </Container>
    </ProfileContainer>
  );
};

export default Profile; 