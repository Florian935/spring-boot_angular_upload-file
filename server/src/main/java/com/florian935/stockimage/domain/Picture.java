package com.florian935.stockimage.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

import static lombok.AccessLevel.PRIVATE;

/**
 * @author florian935
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
@Table(name = "picture")
@FieldDefaults(level = PRIVATE)
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "name")
    String name;

    @Column(name = "content_type")
    private String contentType;

    @Column(name = "size")
    private Long size;

    @Lob
    @Column(name = "data")
    private byte[] data;
}
