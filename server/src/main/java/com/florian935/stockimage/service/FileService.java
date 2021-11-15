package com.florian935.stockimage.service;

import com.florian935.stockimage.domain.File;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface FileService {

    void save(MultipartFile file);

    Optional<File> getFile(Integer id);

    List<File> getAllFiles();
}
