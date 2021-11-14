package com.florian935.stockimage.repository;

import com.florian935.stockimage.domain.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Integer> {
}
