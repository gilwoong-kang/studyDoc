package org.architecture.architecture.DAO;

import org.architecture.architecture.DTO.UserDto;

public interface UserDao {
    public void insert(UserDto userDto);
    public void delete(UserDto userDto);
    public UserDto select(UserDto userDto);
    public void update(UserDto userDto);

}
