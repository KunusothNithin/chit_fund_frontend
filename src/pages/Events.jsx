import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Events.css";
import "./gallery.css";

const initialEvents = [
  {
    id: 1,
    name: "New Year Celebration",
    date: "2024-01-01",
    special: "Welcoming the new year with joy!",
  },
  {
    id: 2,
    name: "Women's Day",
    date: "2025-03-08",
    special: "Celebrating women's achievements!",
  },
];

function Events() {
  const [isAdmin, setIsAdmin] = useState(true); // Set to false to hide admin panel
  const [events, setEvents] = useState(initialEvents);
  const [eventImages, setEventImages] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", date: "", special: "" });

  const today = new Date().toISOString().split("T")[0];

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newId = events.length ? Math.max(...events.map((ev) => ev.id)) + 1 : 1;
    const newEvt = { id: newId, ...newEvent };
    setEvents([...events, newEvt]);

    // Attach uploaded images to the event
    const updatedImages = uploadedImages.map((img) => ({
      ...img,
      eventName: newEvent.name,
      eventDate: newEvent.date,
    }));
    setEventImages([...eventImages, ...updatedImages]);

    setNewEvent({ name: "", date: "", special: "" });
    setUploadedImages([]);
    e.target.reset(); // Clear the form
  };

  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setUploadedImages(urls);
  };

  const pastEventImages = eventImages.filter((img) => img.eventDate < today);
  const upcomingEventImages = eventImages.filter((img) => img.eventDate >= today);

  const gallerySettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    centerMode: true,
    className: "animated-slider",
  };

  return (
    <div className="events-page bg-gradient-to-br from-green-100 via-white to-blue-100">
      {/* Upcoming Events Gallery */}
      {upcomingEventImages.length > 0 && (
        <div className="gallery-section">
          <h2 className="section-title">📅 Upcoming Events</h2>
          <Slider {...gallerySettings}>
            {upcomingEventImages.map((img, index) => (
              <div key={index} className="gallery-card">
                <img src={img.url} alt={img.name} className="gallery-image" />
                <div className="caption">{img.eventName}</div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Admin Form */}
      {isAdmin && (
        <div className="admin-form">
          <h3>Add New Event</h3>
          <form onSubmit={handleAddEvent}>
            <input
              type="text"
              placeholder="Event Name"
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
              required
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              required
            />
            <textarea
              placeholder="Special Notes"
              value={newEvent.special}
              onChange={(e) => setNewEvent({ ...newEvent, special: e.target.value })}
              required
            />
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
            <button type="submit">Add Event</button>
          </form>
        </div>
      )}

      {/* Past Event Gallery */}
      {pastEventImages.length > 0 && (
        <div className="gallery-section">
          <h2 className="section-title">📸 Past Event Gallery</h2>
          <Slider {...gallerySettings}>
            {pastEventImages.map((img, index) => (
              <div key={index} className="gallery-card">
                <img src={img.url} alt={img.name} className="gallery-image" />
                <div className="caption">{img.eventName}</div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Events;
