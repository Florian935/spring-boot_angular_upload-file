package com.florian935.stockimage.service;

import com.florian935.stockimage.domain.Picture;
import com.florian935.stockimage.repository.PictureRepository;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

import static lombok.AccessLevel.PRIVATE;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = PRIVATE)
public class PictureService {

    PictureRepository pictureRepository;

    @SneakyThrows
    public void save(MultipartFile file) {

        final Picture picture = Picture.builder()
                .name(StringUtils.cleanPath(file.getOriginalFilename()))
                .contentType(file.getContentType())
                .data(file.getBytes())
                .size(file.getSize())
                .build();

        pictureRepository.save(picture);
    }

    public Optional<Picture> getFile(Integer id) {

        return pictureRepository.findById(id);
    }

    public List<Picture> getAllFiles() {

        return pictureRepository.findAll();
    }
}
