package org.architecture.architecture.DAO;

import org.architecture.architecture.DTO.AccountDto;
import org.architecture.architecture.DTO.UserDto;

import java.util.List;

public interface AccountDao {
    public void insert(AccountDto accountDto);
    public void delete(AccountDto accountDto);
    public AccountDto select(AccountDto accountDto);
    public List<AccountDto> selectUser(UserDto userDto);
    public void update(AccountDto accountDto);

}
