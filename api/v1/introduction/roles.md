# Api Roles

Api roles are special api permissions that you can assign to an account. Having basic api access does not allow you to work with user information or manage user emails/passwords, for example.

There are three server commands for dealing with api roles.

Granting an api role:
`apigrant [username] [role]`

Revoking an api role:
`apirevoke [username] [role]`

List api roles for an account:
`apiroles [username]`

## Users.Query
Allows access to the Users endpoints.

## Users.Manage
Allows access to the Change Email/Password endpoints for Users without needing to know the users' existing password.