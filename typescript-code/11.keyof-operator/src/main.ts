// Keyof
// 제공된 타입의 키를 추출하여 새로운 Union 유형 반환.
interface IUser {
    name: string;
    age: number;
    address: string;
}

const user = {
    name: 'John',
    age: 30,
    address: '123 Main St'
}

// 'name | 'age' | 'address'
type UserKeys = keyof typeof user;

enum UserRole {
    admin,
    manager
}

// 'admin' | 'manager'
type RoleKeys = keyof typeof UserRole;