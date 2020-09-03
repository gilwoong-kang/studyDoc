package org.architecture.architecture.Service.Concrete;

import org.architecture.architecture.DAO.AccountDao;
import org.architecture.architecture.DAO.UserDao;
import org.architecture.architecture.DTO.AccountDto;
import org.architecture.architecture.DTO.UserDto;
import org.architecture.architecture.Service.Interface.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InquiryServiceImpl implements InquiryService {
    @Autowired
    UserDao userDao;
    @Autowired
    AccountDao accountDao;

    @Override
    public List<AccountDto> inquiry(String userName) {
        UserDto userDto = userDao.select(new UserDto(userName));
        List<AccountDto> accountDtoList = accountDao.selectUser(userDto);
        return accountDtoList;
    }
}
