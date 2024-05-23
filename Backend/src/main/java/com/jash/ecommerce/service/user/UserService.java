package com.jash.ecommerce.service.user;

import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.UserException;
import jdk.jshell.spi.ExecutionControl;

public interface UserService {

    public User findUserById(Long userId) throws UserException;
    public User findUserProfileByJwt(String jwt) throws UserException;
}
