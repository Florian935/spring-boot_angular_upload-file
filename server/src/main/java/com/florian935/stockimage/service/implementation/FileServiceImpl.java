package com.florian935.stockimage.service.implementation;

import com.florian935.stockimage.domain.File;
import com.florian935.stockimage.repository.FileRepository;
import com.florian935.stockimage.service.FileService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static lombok.AccessLevel.PRIVATE;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = PRIVATE)
public class FileServiceImpl implements FileService {

    FileRepository fileRepository;

    @SneakyThrows
    public void save(MultipartFile file) {

        final File fileToSave = File.builder()
                .name(StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename())))
                .contentType(file.getContentType())
                .data(file.getBytes())
                .size(file.getSize())
                .build();

        fileRepository.save(fileToSave);
    }

    public Optional<File> getFile(Integer id) {

        return fileRepository.findById(id);
    }

    public List<File> getAllFiles() {

        return fileRepository.findAll();
    }
}
