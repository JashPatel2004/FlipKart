package com.jash.ecommerce.service.user;

import com.jash.ecommerce.config.JwtProvider;
import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.UserException;
import com.jash.ecommerce.repository.UserRepository;
import com.jash.ecommerce.service.user.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private JwtProvider jwtProvider;

    UserServiceImpl(UserRepository userRepository,JwtProvider jwtProvider){
        this.userRepository=userRepository;
        this.jwtProvider=jwtProvider;
    }
    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User> user=userRepository.findById(userId);
        if(user.isPresent()){
            return user.get();
        }
        throw new UserException("User not found with id - "+userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        String email=jwtProvider.getEmailFromJwt(jwt);
        User user=userRepository.findByEmail(email);
        if(user==null){
            throw new UserException("User not found with email -"+email);
        }
        return user;
    }
}
