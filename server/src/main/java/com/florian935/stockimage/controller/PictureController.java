package com.florian935.stockimage.controller;

import com.florian935.stockimage.domain.Picture;
import com.florian935.stockimage.service.PictureService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static lombok.AccessLevel.PRIVATE;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/pictures")
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = PRIVATE)
public class PictureController {

    PictureService pictureService;

    @PostMapping(produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<String> upload(@RequestParam("picture") MultipartFile file) {

        try {
            pictureService.save(file);

            return ResponseEntity.status(OK)
                    .body(String.format("File uploaded successfully: %s", file.getOriginalFilename()));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(String.format("Could not upload the file: %s!", file.getOriginalFilename()));
        }
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public List<Picture> list() {

        return pictureService.getAllFiles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable Integer id) {

        final Optional<Picture> fileEntityOptional = pictureService.getFile(id);

        if (fileEntityOptional.isEmpty()) {
            return ResponseEntity.notFound()
                    .build();
        }

        final Picture picture = fileEntityOptional.get();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + picture.getName() + "\"")
                .contentType(MediaType.valueOf(picture.getContentType()))
                .body(picture.getData());
    }
}
