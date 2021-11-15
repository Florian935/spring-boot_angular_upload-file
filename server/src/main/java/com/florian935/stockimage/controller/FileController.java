package com.florian935.stockimage.controller;

import com.florian935.stockimage.domain.File;
import com.florian935.stockimage.service.FileService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

import static lombok.AccessLevel.PRIVATE;
import static org.springframework.http.HttpStatus.*;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.TEXT_XML_VALUE;

@RestController
@RequestMapping("/files")
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = PRIVATE)
@CrossOrigin("http://localhost:4200")
public class FileController {

    FileService fileService;

    @PostMapping(produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    @ResponseStatus(CREATED)
    public String upload(@RequestParam("file") MultipartFile file) {

        try {

            fileService.save(file);
            return String.format("File uploaded successfully: %s", file.getOriginalFilename());
        } catch (Exception e) {
            return String.format("Could not upload the file: %s!", file.getOriginalFilename());
        }
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    @ResponseStatus(OK)
    public List<File> list() {

        return fileService.getAllFiles();
    }

    @GetMapping(path = "/{id}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<File> getFile(@PathVariable Integer id) {

        final Optional<File> fileEntityOptional = fileService.getFile(id);

        if (fileEntityOptional.isEmpty()) {
            return ResponseEntity.notFound()
                    .build();
        }

        final File file = fileEntityOptional.get();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + file.getName() + "\"")
                .body(file);
    }
}
