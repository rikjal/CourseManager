package com.courses.coursemanager.dao;

import com.courses.coursemanager.entities.Course;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDao extends JpaRepository<Course, Long> {

}
