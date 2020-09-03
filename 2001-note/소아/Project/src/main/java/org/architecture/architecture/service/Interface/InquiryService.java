package org.architecture.architecture.Service.Interface;

import org.architecture.architecture.DTO.AccountDto;

import java.util.List;

public interface InquiryService {
    public List<AccountDto> inquiry(String userName);
}
